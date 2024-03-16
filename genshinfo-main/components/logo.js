import Link from "next/link";
import Image from "next/image";
import logo from '../public/src/logonew.png'
import styled from "@emotion/styled";

const LogoBox = styled.span`
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
`

export default function Logo() {
    return (
        <Link href="/">
            <LogoBox>
                <Image src={logo} alt='logo' width={120} />
            </LogoBox>
        </Link>
    )
}