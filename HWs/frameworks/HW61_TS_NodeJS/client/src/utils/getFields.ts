import { Field } from "../components";

const createFields = () => {
  const fields: Field[] = [];

  fields.push(new Field("8", "", "public/pieces/black-rook.png", "white"));
  fields.push(
    new Field("", "", "public/pieces/black-knight.png", "darkmagenta")
  );
  fields.push(new Field("", "", "public/pieces/black-bishop.png", "white"));
  fields.push(
    new Field("", "", "public/pieces/black-queen.png", "darkmagenta")
  );
  fields.push(new Field("", "", "public/pieces/black-king.png", "white"));
  fields.push(
    new Field("", "", "public/pieces/black-bishop.png", "darkmagenta")
  );
  fields.push(new Field("", "", "public/pieces/black-knight.png", "white"));
  fields.push(new Field("", "", "public/pieces/black-rook.png", "darkmagenta"));
  fields.push(
    new Field("7", "", "public/pieces/black-pawn.png", "darkmagenta")
  );
  fields.push(new Field("", "", "public/pieces/black-pawn.png", "white"));
  fields.push(new Field("", "", "public/pieces/black-pawn.png", "darkmagenta"));
  fields.push(new Field("", "", "public/pieces/black-pawn.png", "white"));
  fields.push(new Field("", "", "public/pieces/black-pawn.png", "darkmagenta"));
  fields.push(new Field("", "", "public/pieces/black-pawn.png", "white"));
  fields.push(new Field("", "", "public/pieces/black-pawn.png", "darkmagenta"));
  fields.push(new Field("", "", "public/pieces/black-pawn.png", "white"));
  fields.push(new Field("6", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("5", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("4", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("3", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("", "", "", "darkmagenta"));
  fields.push(new Field("", "", "", "white"));
  fields.push(new Field("2", "", "public/pieces/white-pawn.png", "white"));
  fields.push(new Field("", "", "public/pieces/white-pawn.png", "darkmagenta"));
  fields.push(new Field("", "", "public/pieces/white-pawn.png", "white"));
  fields.push(new Field("", "", "public/pieces/white-pawn.png", "darkmagenta"));
  fields.push(new Field("", "", "public/pieces/white-pawn.png", "white"));
  fields.push(new Field("", "", "public/pieces/white-pawn.png", "darkmagenta"));
  fields.push(new Field("", "", "public/pieces/white-pawn.png", "white"));
  fields.push(new Field("", "", "public/pieces/white-pawn.png", "darkmagenta"));
  fields.push(
    new Field("1", "a", "public/pieces/white-rook.png", "darkmagenta")
  );
  fields.push(new Field("", "b", "public/pieces/white-knight.png", "white"));
  fields.push(
    new Field("", "c", "public/pieces/white-bishop.png", "darkmagenta")
  );
  fields.push(new Field("", "d", "public/pieces/white-queen.png", "white"));
  fields.push(
    new Field("", "e", "public/pieces/white-king.png", "darkmagenta")
  );
  fields.push(new Field("", "f", "public/pieces/white-bishop.png", "white"));
  fields.push(
    new Field("", "g", "public/pieces/white-knight.png", "darkmagenta")
  );
  fields.push(new Field("", "h", "public/pieces/white-rook.png", "white"));

  return fields;
};

export const getFields = (): Field[] => {
  return createFields();
};
