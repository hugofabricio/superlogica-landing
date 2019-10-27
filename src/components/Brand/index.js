import React from "react";
import Link from "next/link";
import Logo from "../../images/Superlogica.svg";

import * as S from "./styled";

const Brand = () => (
  <Link href="/" passHref>
    <S.BrandLink title="Superlógica">
      <S.BrandLogo>Superlógica</S.BrandLogo>
      <Logo />
    </S.BrandLink>
  </Link>
);

export default Brand;
