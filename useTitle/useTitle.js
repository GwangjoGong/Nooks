export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)

  const updateTitle = () => {
    const titleEl = document.querySelector('title')
    titleEl.innerText = title
  }

  useEffect(updateTitle, [title])

  return setTitle
}
