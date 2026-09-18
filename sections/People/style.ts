export const backgroundColors = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  blue: 'bg-[#f0f6ff]',
  dark: 'bg-gray-900',
} as const

// 컬럼 수별 그리드 + 간격 (인원이 많은 4열은 간격을 좁게)
export const columnClasses = {
  1: 'grid-cols-1 gap-12 lg:gap-24',
  2: 'grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16',
  4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10',
} as const

// 그룹(팀) 제목 헤딩
export const groupTitleClasses = 'text-xl lg:text-2xl font-bold mb-8 pb-3 border-b'

// hero 레이아웃 인물 사진 박스 비율.
// 원본 사진이 900x1260(=5:7)이므로 동일 비율을 써야 위아래가 잘리지 않는다.
// 사진/플레이스홀더 양쪽에 같은 값을 써서 Leadership·Team 카드 높이를 통일한다.
export const heroPhotoAspectClasses = 'aspect-[5/7]'

// hero 사진 이미지 클래스. object-top 이라 비율이 어긋나도 머리부터 보존된다.
export const heroPhotoImageClasses =
  'w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter grayscale hover:grayscale-0'

// 앞 사람과 소속 파트가 다를 때 우측으로 살짝 밀어 분리를 표시 (1열인 모바일에서는 어색하므로 md 이상)
// margin 이 아니라 transform 을 쓴다. 그리드 아이템에 margin 을 주면 트랙 폭이 줄어
// 그 카드만 사진이 작아지기 때문(aspect 비율 때문에 높이까지 함께 줄어듦).
export const personOffsetClasses = 'md:translate-x-6 lg:translate-x-10'

// 사진 없는 인원용 플레이스홀더
export const placeholderBoxClasses = 'flex items-center justify-center'
export const placeholderIconClasses = 'w-1/3 h-1/3 text-gray-300'
