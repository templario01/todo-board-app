type Props = {
  children: any
}

export const Container = ({ children }: Props) => {
  return (
    <div className="container p-4 ">
      <div className="col-md-4 offset-md-4">{children}</div>
    </div>
  )
}
