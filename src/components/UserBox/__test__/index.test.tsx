import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import UserBox from "..";

test("on initial render of UserBox Component" , ()=>{
    render(<UserBox user={{avatar_url: '/images/img.jpg', name: 'John'}} logOut={ (e: React.MouseEvent<HTMLButtonElement>) => {}} />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
});