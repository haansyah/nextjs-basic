import { useRouter } from "next/router"
import { userInfo } from "os";
import internal from "stream";
import Layout from "../../components/Layout";

interface User{
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}
export default function UserDetail(props: UserDetailProps) {
  const {user} = props;
  return (
    <Layout pageTitle="User Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
 );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataUser = await res.json();

  const paths = dataUser.map((user: User) => {
    return {
      params:{
        id: `${user.id}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

interface GetStaticProps {
  params: {
    id: string;
  }
}
export async function getStaticProps(context: GetStaticProps) {
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  console.log(user);
  
  return {
    props: {
      user,
    },
  };
}