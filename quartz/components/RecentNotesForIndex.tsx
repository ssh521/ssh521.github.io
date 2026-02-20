import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import ConditionalRender from "./ConditionalRender"
import RecentNotes from "./RecentNotes"

export default ((userOpts?: Parameters<typeof RecentNotes>[0]) => {
  const RecentNotesComponent = RecentNotes({ limit: 5, ...userOpts })
  return ConditionalRender({
    component: RecentNotesComponent,
    condition: (props: QuartzComponentProps) => props.fileData.slug === "index",
  })
}) satisfies QuartzComponentConstructor
