-- to build the json object within pgadmin
SELECT json_agg(json_build_object('id', id, 'country', country, 'city', city, 'destination', destination)) AS json_data
	FROM public."Travel-Wishlist";

-- to insert data into the table
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('Italy', 'Rome', 'Colosseum');
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('Japan', 'Tokyo', 'Mount Fuji');
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('France', 'Paris', 'Eiffel Tower');
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('USA', 'New York', 'Statue of Liberty');
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('Australia', 'Sydney', 'Sydney Opera House');
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('Greece', 'Athens', 'Acropolis');
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('Egypt', 'Cairo', 'Pyramids of Giza');
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('Brazil', 'Rio de Janeiro', 'Christ the Redeemer');
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('India', 'Agra', 'Taj Mahal');
INSERT INTO public."Travel-Wishlist" (country, city, destination) VALUES ('Spain', 'Barcelona', 'Sagrada Familia');
