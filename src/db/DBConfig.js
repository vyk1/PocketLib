export const DBConfig = {
    name: 'livros',
    version: 1,
    objectStoresMeta: [
      {
        store: 'livros',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'titulo', keypath: 'titulo', options: { unique: true } },
          { name: 'paginas', keypath: 'paginas', options: { unique: false } },
          { name: 'lidas', keypath: 'lidas', options: { unique: false } }
        ]
      }
    ]
  };