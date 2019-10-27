import NextLink from "next/link";
import { isExternalUrl } from "../../util/url";
import * as S from "./styled";

const Link = ({ className, label, url }) => {
  if (isExternalUrl(url)) {
    return (
      <S.Link className={className} href={url} title={label} target="_blank">
        {label}
      </S.Link>
    );
  } else {
    return (
      <NextLink href={url} passHref>
        <S.Link activeClassName="active" className={className} title={label}>
          {label}
        </S.Link>
      </NextLink>
    );
  }
};

export default Link;
