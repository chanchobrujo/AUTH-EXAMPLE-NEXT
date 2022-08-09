import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {signIn, useSession, getProviders} from 'next-auth/react';

const Login: NextPage = () => {
  const router = useRouter();
  const {status} = useSession();

  if (status !== 'loading' && status === 'authenticated') router.push('/');

  return (
    <div>
      <button onClick={() => signIn()}>Iniciar sesión con github</button>
    </div>
  );
};

export default Login;
