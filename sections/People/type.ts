import { HTMLAttributes } from 'react';

export interface Person {
  id: string;
  name: string;
  position: string;
  bio?: string;
  quote?: string;
  /** 사진 경로. 없으면 플레이스홀더 실루엣이 렌더된다. */
  image?: string;
  imageAlt?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  experience?: string;
  education?: string;
  /**
   * 앞 사람과 소속 파트가 다름을 표시. true 면 그리드에서 좌측 여백을 주어
   * 같은 그룹 안에서도 파트가 분리되어 보이게 한다. (md 이상 화면에서만 적용)
   */
  offset?: boolean;
}

/** 팀(그룹) 단위 인물 묶음 — 그룹 제목 + 소속 인원 */
export interface PersonGroup {
  id: string;
  title: string;
  people: Person[];
}

export interface PeopleProps extends Omit<HTMLAttributes<HTMLElement>, 'id'> {
  id?: string;
  subtitle?: string;
  title: string;
  description?: string;
  /** 단일 그리드로 렌더할 인원 (groups 가 없을 때 사용) */
  people?: Person[];
  /** 그룹별(팀별) 헤딩 + 그리드로 렌더할 인원 (있으면 people 보다 우선) */
  groups?: PersonGroup[];
  columns?: 1 | 2 | 3 | 4;
  backgroundColor?: 'white' | 'gray' | 'blue' | 'dark';
  showSocials?: boolean;
  layout?: 'card' | 'minimal' | 'hero';
}
