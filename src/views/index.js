import { Switch, Route, Router } from 'react-router-dom';
import { routes } from '@/router/routes';

export default function Home() {
  return <>
      <div>memuList</div>
      <Switch>
        {
          routes.map(item => {
            return (<Route path={item.path} component={item.component} key={item.path+'rou'} />)
          })
        }
      </Switch>
  </>
}