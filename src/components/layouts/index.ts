export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster:
      "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllfGVufDB8fDB8fHww",
    name: "Airplane",
  },
  {
    poster:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWV8ZW58MHx8MHx8fDA%3D",
    name: "Family man",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWV8ZW58MHx8MHx8fDA%3D",
    name: "Laboratory",
  },
  {
    poster:
      "https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWV8ZW58MHx8MHx8fDA%3D",
    name: "Napoleon",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww",
    name: "Person in Darkness",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1lfGVufDB8fDB8fHww",
    name: "Scary Building",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1lfGVufDB8fDB8fHww",
    name: "Stars",
  },
];

export const randomMoviesSet1 = [...movies]
  .sort(() => Math.random() - 0.5)
  .concat([...movies].sort(() => Math.random() - 0.5))
  .concat([...movies].sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = [...movies]
  .sort(() => Math.random() - 0.5)
  .concat([...movies].sort(() => Math.random() - 0.5))
  .concat([...movies].sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
