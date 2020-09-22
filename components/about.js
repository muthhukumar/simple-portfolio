const Content = ({title, children}) => {
  return (
    <div>
      <div className="font-bold text-2xl mt-8">{title}</div>
      {children}
    </div>
  )
}

export default Content;
