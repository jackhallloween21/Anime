In `Upload.vue`:
```html
<template>
<div id="app">
<h1>Image Uploader</h1>
<form @submit.prevent="handleSubmit">
<label for="file">Choose a file:</label>
<input type="file" id="file" name="file" ref="fileInput" v-on:change="handleFileSelect">
<button type="submit">Upload</button>
</form>
<div v-if="imageUrl" class="image-container"><img :src="imageUrl" alt="Uploaded Image"></div>
</div>
