import { Route } from "react-router";

// template giup hien thi 1 so component o 1 trang ma chung ta muon no hien thi
export default function UserTemplate(props) {
  return (
    <Route path={props.path} exact render={(propsRoute) => {
        return (
          <div style={{background:'url(./img/bg-login.jpg) 100% 100%',height:'1000px'}} >
      
            <props.component {...propsRoute} />
            
          </div>
        );
      }}
    />
  );
}
