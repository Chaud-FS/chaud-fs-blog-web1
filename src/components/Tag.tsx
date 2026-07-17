interface TagProps {
  label: string
  /** 可选：自定义跳转地址，缺省则自动生成百度百科链接 */
  href?: string
}

// 百度百科条目地址：https://baike.baidu.com/item/<词条>
const baikeUrl = (term: string) =>
  `https://baike.baidu.com/item/${encodeURIComponent(term)}`

export function Tag({ label, href }: TagProps) {
  const url = href ?? baikeUrl(label)
  return (
    <a
      className="tag"
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      title={`查看「${label}」的百度百科`}
    >
      {label}
    </a>
  )
}
