import cla from './Friends.module.css'

const Friends =(props)=> {
    return (
      <div className={cla.item}>
      <h1>Friends</h1>
      <div className={cla.item}>
        <img alt='' src='https://f1.upet.com/A_r2u6uZhnxA_x.jpg'></img>
        <img alt='' src='https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/10/klevye-kartinki-dlya-srisovki-2.png'></img>
        <img alt='' src='https://i.pinimg.com/236x/5b/e1/75/5be17525ba53cfd0a55f0d1c994ab180.jpg'></img>
      </div>
    </div>
    );
  }
  export default Friends;