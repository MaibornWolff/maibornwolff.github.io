import '../../data/repositories.json';
import Repository from '../utils';
import { getReposAsync } from './OpenSourcedProjects';

test('checks if right type is returned', async () => {
    const checkType = await getReposAsync();
    expect(Array.isArray(checkType)).toBe(true);
});
