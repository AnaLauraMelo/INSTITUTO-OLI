const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
  }

  async #readFile() {
    try {
      const content = await fs.promises.readFile(this.path, 'utf-8');
      const parseContent = JSON.parse(content);
      return parseContent;
    } catch (error) {
      console.log(error);
    }
  }

  async addProduct(obj) {
    const fileContent = await this.#readFile();
    if (await this.#checkProductCode(obj.code)) return console.log(`Error: el codigo del producto ${obj.code} ya existe.`)

    try {
      if (fileContent.length !== 0) await fs.promises.writeFile(this.path, JSON.stringify([...fileContent, { ...obj, id: fileContent[fileContent.length - 1].id + 1 },], null, 2), "utf-8");
      else await fs.promises.writeFile(this.path, JSON.stringify([{ ...obj, id: 1 }]), "utf-8");
    } catch (error) {
      console.log(error);
    }
  }
  

  async getProducts() {
    const fileContent = await this.#readFile();

    try {
      console.log(fileContent);
    } catch (error) {
      console.log(`Error: No existe.`);
    }
  }

  async getProductById(id) {
    try {
      const fileContent = await this.#readFile();

      if (!fileContent.find((objeto) => objeto.id === id)) throw new Error(`Error: No existen productos ${id}.`);
      else console.log(fileContent.find((objeto) => objeto.id === id));      
    } catch (error) {
      console.log(`Error: No existen productos ${id}.`);
    }
  }

  async updateProduct(id, obj) {
    try {
      const fileContent = await this.#readFile();
      const updated = fileContent.map((product) => product.id === id ? { ...product, ...obj } : product);

      if (!fileContent.find((objeto) => objeto.id === id)) throw new Error(`Error: No existen productos ${id}.`);
      else await fs.promises.writeFile(this.path, JSON.stringify(updated, null, 2));

    } catch (error) {
      console.log(`Error: no existen productos ${id}.`);
    }
  }

  // Public methods: Delete a product by id.
  async deleteProductById(id) {
    try {
      const fileContent = await this.#readFile();
      const updated = fileContent.filter((product) => product.id !== id);

      if (!fileContent.find((obj) => obj.id === id)) throw new Error(`Error: No existen los productos ${id}.`);
      else await fs.promises.writeFile(this.path, JSON.stringify(updated, null, 4)); 
    } catch (error) {
      console.log(`Error: no detecto el producto ${id}.`);
    }
  }

  async deleteAll() {
    await fs.promises.writeFile(this.path, JSON.stringify([]), 'utf-8');
  }
}

module.exports = ProductManager;