const urls = [
  'https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/04/23/21/59/hot-air-balloon-736879_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/09/19/07/01/lake-1679708_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/03/29/11/29/nepal-2184940_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/03/28/10/19/sunset-4086848_1280.jpg',
]

const genRandomNumber = () => {
  let num = Math.floor(Math.random() * urls.length)

  return num
}

export const onChangeBg = () => {
  const img = document.querySelector('.bg-img')

  if (!img) return
  const index = genRandomNumber()

  Object.assign((img as any).style, {
    'background-image': `url(${urls[index]})`,
  })
}
