import {useUserContext} from '../context/UserContext'

export default function Home() {
  const context = useUserContext();
  return (
    <>
       {context.user.name}
       <h1>Hello Home</h1>
    </>
  )
}
