import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart возвращает sum', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1900, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Action', 137, 1000));

  expect(cart.sum()).toBe(3900);
})

test('cart возвращает sum со скидкой', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1900, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Action', 137, 1000));

  expect(cart.sumWithDiscount(0.1)).toBe(3510);
})

test('delete удаляет item из cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1900, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Action', 137, 1000));

  cart.delete(1900);

  expect(cart.items.length).toBe(2);
})
