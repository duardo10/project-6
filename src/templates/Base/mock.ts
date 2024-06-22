import { BaseTemplateProps } from '.';
import { data } from '../../api/dados.json';

export default {
  settings: data.setting,
  children: data.posts,
} as unknown as BaseTemplateProps;