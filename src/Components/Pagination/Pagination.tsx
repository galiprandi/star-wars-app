interface iProps {
  page: string
  setPage: React.Dispatch<React.SetStateAction<string>>
  isSuccess: boolean
  next: string | null | undefined
  previous: string | null | undefined
}

export const Pagination = ({
  page,
  setPage,
  next,
  previous,
  isSuccess,
}: iProps) => {
  if (isSuccess)
    return (
      <>
        <div className="pagination">
          {
            // Previous Button
            !!previous && (
              <button onClick={() => setPage(previous!)}>
                <span className="material-icons">navigate_before</span>
              </button>
            )
          }

          {
            // Page number
            !!previous && <span className="page-number">{page.slice(-1)}</span>
          }

          {
            // Next Button
            !!next && (
              <button onClick={() => setPage(next!)}>
                <span className="material-icons">navigate_next</span>
              </button>
            )
          }
        </div>
        <span className="material-icons swipe" title="Swipe to change the page">
          swipe
        </span>
      </>
    )
  else return null
}
