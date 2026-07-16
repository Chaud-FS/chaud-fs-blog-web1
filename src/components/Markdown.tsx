import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../markdown.css'

export function Markdown({ source }: { source: string }) {
  return (
    <div className="md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node: _node, ...props }) => (
            <a {...props} target="_blank" rel="noreferrer noopener" />
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  )
}
