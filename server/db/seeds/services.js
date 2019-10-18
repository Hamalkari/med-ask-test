
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        {
          name: 'Первичный приём врача-стоматолога терапевта',
          include: true
        },
        {
          name: 'Полирование челюсти',
          include: true
        },
        {
          name: 'Снятие камней с 1 зуба',
          include: true
        },
        {
          name: 'Рентген верхней и нижней челюстей',
          include: true
        },
        {
          name: 'МРТ грудной клетки',
          include: true
        },
        {
          name: 'МРТ челюсти',
          include: false
        },
        {
          name: 'Рентген грудной клетки',
          include: false
        },
        {
          name: 'Исследование функции внешнего дыхания',
          include: false
        },
        {
          name: 'Денситометрия',
          include: false
        },
        {
          name: 'МРТ головного мозга',
          include: false
        }
      ]);
    });
};
