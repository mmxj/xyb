export default function(text){
    if(text.ret){
        let message=text.ret.errorMessage;
        switch (message){
            case  "user login not exist":
                alert('用户不存在')
                break;
            case "password error":
                alert('密码错误')
                break;

            case "validatecode check error":
                alert('验证码错误')
                break;
            case "ValidateCode error":
                alert('验证码错误')
                break;

            default :
                alert ('请求错误')
        }

    }

}