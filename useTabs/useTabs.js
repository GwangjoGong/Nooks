export const useTabs = (initialTab, allTabs) => {
  const [current, setCurrent] = useState(initialTab)

  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }

  return {
    currentItem: allTabs[current],
    changeItem: setCurrent
  }
}
