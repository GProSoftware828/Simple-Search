import { UsersTable } from '../Components/UsersTable';
import { render, fireEvent, cleanup } from '@testing-library/react';

test('Should be the same UsersTable- snapshot', () => {
	expect(UsersTable).toMatchSnapshot();
})