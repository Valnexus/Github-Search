import './style.css';

interface Props {
    user: any;
    logOut: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserBox: React.FC<Props> = ({ user, logOut }) => {
    return (
        <div className="header-user">
            <img src={user.avatar_url} alt={user.name} />
            <span>{user.login}</span>
            <ul className="header-user-nav">
                <li><span onClick={logOut}>Logout</span></li>
            </ul>
        </div> 
    )
};

export default UserBox;