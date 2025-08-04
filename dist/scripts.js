"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('✅ Database schema synchronized successfully.');
})
    .catch((error) => {
    console.error('❌ Error during schema synchronization:', error);
    process.exit(1);
});
