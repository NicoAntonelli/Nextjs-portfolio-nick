import { type SchemaTypeDefinition } from 'sanity'
import experience from './schemas/experience'
import pageInfo from './schemas/pageInfo'
import project from './schemas/project'
import skill from './schemas/skill'
import skillCategory from './schemas/skillCategory'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [experience, pageInfo, project, skill, skillCategory, social],
}
