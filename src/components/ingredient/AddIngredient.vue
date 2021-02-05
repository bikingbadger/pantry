<template>
  <div class="ingredient">
    <div class="add-ingredient-frm">
      <div>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label for="category">Category:</label>
        <select id="category" name="category">
          <option value="legumes">Legumes</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruit">Fruit</option>
          <option value="dairy">Dairy</option>
        </select>
      </div>
      <div>
        <label for="uom">Unit of Measure:</label>
        <input type="text" name="uom" id="uom" />
      </div>
      <div><button>Add</button></div>
    </div>
    <ul>
      <li>Milk</li>
      <li>Whole wheat flour</li>
      <li>Olive Oil</li>
    </ul>
  </div>
</template>
