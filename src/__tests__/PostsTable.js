import { PostsTable } from '../Components/PostsTable';

test('Should be the same PostsTable- snapshot', () => {
	expect(PostsTable).toMatchSnapshot();
})