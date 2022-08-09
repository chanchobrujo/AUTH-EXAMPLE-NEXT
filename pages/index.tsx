import {Session} from 'next-auth';
import {GetStaticPropsResult} from 'next';
import {CtxOrReq} from 'next-auth/client/_utils';
import {getSession, signOut} from 'next-auth/react';

import {HomeProps} from 'models/Properties';
import {ImageComponent} from 'components/ImageComponent';

const session_invalid: Session = {expires: ''};
const Home: React.FC<HomeProps> = ({session}: HomeProps) => {
  return (
    <div>
      <h2>
        Bienvenido!!! <strong>{session.user?.name}</strong>
      </h2>
      <ImageComponent image={session?.user?.image || ''} />
      <br />
      <button onClick={() => signOut()}>Cerrar sesión</button>
    </div>
  );
};

export const getServerSideProps = async (context: CtxOrReq): Promise<GetStaticPropsResult<HomeProps>> => {
  const session: Session = (await getSession(context)) || session_invalid;

  if (session == session_invalid) return {redirect: {destination: '/login', permanent: false}};
  return {props: {session}};
};

export default Home;
