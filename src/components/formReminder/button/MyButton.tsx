type MyProps = {
  text: string
}

const MyButton = (props: MyProps) => {
  return (
    <button>mi botoncito {props.text}</button>
  )
}
export default MyButton