import './App.css';
import UserForm from './components/user_form';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounter2';
// import AnotherDocumentHook from './components/AnotherDocumentHook';
// import DocumentHook from './components/documentHook';
// import ClassTimer from './components/ClassTimer';
// import HookFocusInput from './components/hook_focus_input';
// import HookTimer from './components/hook_timer';
// import MemoCounter from './components/memo_counter';
// import CallbackParentComponent from './components/callback_parent_component';
// import React, { Component, useReducer } from 'react';
// import ReducerDataFetching from './components/ReducerDataFetching';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';
// import ReduceCounter from './components/reduce_counter';
// import ReduceCountTwo from './components/reduce_counter_2';
// import ReduceCounterThree from './components/reduce_counter_3';
// import DataFetching from './components/DataFetching';
// import IntervalCounter from './components/IntervalCounter';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import ClassComponent from './components/class_counter';
// import HookCounter from './components/hook_counter';
// import HookCounter2 from './components/hook_counter2';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterOne from './components/HookCounterOne';
// import ClassCounterOne from './components/ClassCounterOne';
// import PostList from './components/PostList';
// import PostForm from './components/post_form';
// import { UserProvider } from './components/user_context';
// import ComponentF from './components/component_f';
// import ComponentE from './components/component_e';
// import ComponentC from './components/component_c';
// import ClickCounterTwo from './components/click_counter_two';
// import HoverCounterTwo from './components/hover_counter_two';
// import RenderCounter from './components/render_counter';
// import User from './components/user';
// import ClickCounter from './components/click_counter';
// import HoverCounter from './components/hover_counter';
// import Hero from './components/hero';yyy
// import ErrorBoundry from './components/error_boundry';
// import PortalDemo from './components/portal_demo';
// import FRParentInput from './components/FRParentInput';
// import FocusInput from './components/focus_input';
// import RefsDemo from './components/refs_demo';
// import NewParentComponent from './components/new_parent_component';
// import PureComponent from './components/pure_component';
// import Fragment from './components/fragment';
// import Table from './components/table';
// import LifecycleA from './components/lifecycle_a';
// import Form from './components/form';
// import Inline from './components/inline';
// import Name_list from './components/name_list';
// import Stylesheet from './components/stylesheet';
// import User_greeting from './components/user_greeting';
// import Greet from './components/greet';
// import Welcome from './components/welcome';
// import Hello from './components/hello';
// import Message from './components/message';
// import Counter from './components/counter';
// import Function_click from './components/function_click';
// import Parent from './components/parent_component';
// import Custom_counter from './components/new_counter';

// export const CountContext = React.createContext();

// const initial_state = 0;
// const reducer = (state, action) => {
// 	switch (action) {
// 		case 'increment':
// 			return state + 1;
// 		case 'decrement':
// 			return state - 1;
// 		case 'reset':
// 			return initial_state;
// 		default:
// 			return state;
// 	}
// };

function App() {
	// const [count, dispatch] = useReducer(reducer, initial_state);
	return (
		<div className='App'>
			<UserForm />
			{/* <HookCounter /> */}
			{/* <HookCounterTwo /> */}
			{/* <DocumentHook />
			<AnotherDocumentHook /> */}
			{/* <HookTimer /> */}
			{/* <ClassTimer /> */}
			{/* <HookFocusInput /> */}
			{/* <MemoCounter /> */}
			{/* <CallbackParentComponent /> */}
			{/* <ReducerDataFetching /> */}
			{/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
				Count - {count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</CountContext.Provider> */}
			{/* <ReduceCounterThree /> */}
			{/* <ReduceCountTwo /> */}
			{/* <ReduceCounter /> */}
			{/* <DataFetching /> */}
			{/* <IntervalCounter /> */}
			{/* <MouseContainer /> */}
			{/* <HookMouse /> */}
			{/* <ClassCounterOne /> */}
			{/* <HookCounterOne /> */}
			{/* <HookCounterFour /> */}
			{/* <HookCounterThree /> */}
			{/* <HookCounter2 /> */}
			{/* <HookCounter /> */}
			{/* <ClassComponent /> */}
			{/* <PostForm /> */}
			{/* <PostList /> */}
			{/* <UserProvider value='user'>
					<ComponentC />
					<ComponentF />
					<ComponentE />
				</UserProvider> */}
			{/* <RenderCounter
					render={(count, increment_count) => <ClickCounterTwo count={count} increment_count={increment_count} />}
				/>
				<RenderCounter
					render={(count, increment_count) => <HoverCounterTwo count={count} increment_count={increment_count} />}
				/> */}
			{/* <User render={isLoggedIn => (isLoggedIn ? 'User' : 'Guest')} />
				<HoverCounterTwo />
				<ClickCounterTwo /> */}
			{/* <ClickCounter />
				<HoverCounter /> */}
			{/* <ErrorBoundry>
				<Hero hero_name='batman' />
			</ErrorBoundry>
			<ErrorBoundry>
				<Hero hero_name='superman' />
			</ErrorBoundry>
			<ErrorBoundry>
				<Hero hero_name='joker' />
			</ErrorBoundry> */}
			{/* <PortalDemo /> */}
			{/* <FRParentInput /> */}
			{/* <FocusInput /> */}
			{/* <RefsDemo /> */}
			{/* <NewParentComponent /> */}
			{/* <Fragment /> */}
			{/* <Table /> */}
			{/* <LifecycleA /> */}
			{/* <Form /> */}
			{/* <Inline /> */}
			{/* <Stylesheet primary={false} /> */}
			{/* <Greet name='bruce' heroname='batman' />
				<Welcome name='dianah' character_name='wonder women' />
				<Hello name='rock' />
				<Message name='user' />
				<Counter name=''></Counter>
				<Function_click />
				<Parent /> */}
			{/* <Custom_counter /> */}
			{/* <User_greeting /> */}
			{/* <Name_list /> */}
		</div>
	);
}

export default App;
