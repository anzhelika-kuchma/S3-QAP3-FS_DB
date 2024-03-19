CREATE TABLE public."Travel-Wishlist"
(
    id serial NOT NULL,
    country character varying(100) NOT NULL,
    city character varying(100) NOT NULL,
    destination character varying(200) NOT NULL,
    PRIMARY KEY (id)
);
