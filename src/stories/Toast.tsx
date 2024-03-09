import './Toast.css';
import danger from './assets/danger.png';
import success from './assets/success.png';
import successCTA from './assets/success_cta.png';
import dangerCTA from './assets/danger_cta.png';
import avatar from './assets/Avatar.png';
import Icon from './Icon';

export enum ToastType {
  SUCCESS = 'success',
  DANGER = 'danger',
  AVATAR = 'avatar',
};

const colors = {
  success: '#00AC80',
  danger: '#FF6464',
  avatar: '#9CA3AF'
}


export interface ToastProps {
  type: ToastType;
  message: string;
  cta?: boolean;
  mobile?: boolean;
  description?: string;
}


const Toast = ({ type, message, description, cta = false, mobile = false }:ToastProps) => {
    let startImage = '';

    switch (type) {
        case ToastType.DANGER:
            if(description){
              startImage = dangerCTA.src;
            }else{
              startImage = danger.src;
            }
            break;
        case ToastType.SUCCESS:
            if(description){
              startImage = successCTA.src;
            }else{
              startImage = success.src;
            }
            break;
        case ToastType.AVATAR:
            startImage = avatar.src;
          break;
        default:
            break;
    }
  return (
    <div className={`toast ${type} `} style={{width: !mobile ? '675px':'fit-content' }} >
      <div className='message-wrapper'>
         <img src={startImage} alt="" className="start-image" />
          <div className={`message message-${type}`} style={{width:mobile ? '271px':'auto'}}>{message}</div>
        <Icon color={colors[type]}/>
      </div>
      <div className={`wrapper-desc wrapper-desc-${type}`}>
        {description && <div className={`description `}>{description}</div>}
        {cta && <button className={`cta cta-${type}`} data-testid='cta-type'>{type === 'avatar' ? 'Button Text': 'Take action'}</button>}
      </div>
    </div>
  );
};

export default Toast;