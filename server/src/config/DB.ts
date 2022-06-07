import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('zen-bulling', 'root', '', { dialect: 'mysql' });

export default sequelize;
