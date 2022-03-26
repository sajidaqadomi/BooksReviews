import React, { useContext } from "react";
import { Link } from 'react-router-dom'

import colors from "../../../config/colors";
import { ModeContext } from "../../../Contexts/ModeContext";
import {
  Auther,
  Card,
  CardContent,
  Image,
  ImageConatiner,
  ReviewedInf,
  Title,
} from "./styles";

const BookCard = ({ book, ...rest }) => {
  const { author, cat, id, image, reviewedBy, title } = book;
  const { mode } = useContext(ModeContext);
  return (
    <Link to={`/book/${id}`}>
      <Card {...rest}>

        <ImageConatiner>
          <Image src={image} alt="nnn" />
        </ImageConatiner>
        <CardContent>
          <Title color={mode[cat] === "dark" ? colors.white : colors.black}>
            {title}
          </Title>
          <Auther color={mode[cat] === "dark" ? colors.spring : `rgba(0,0,0,.6)`}>
            By {author}
          </Auther>
          <ReviewedInf
            color={mode[cat] === "dark" ? colors.spring : `rgba(0,0,0,.6)`}
          >
            reviewed By {reviewedBy}
          </ReviewedInf>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
