
import Nav from "../components/Nav"

function PostPage({data}) {
  return (
      <PostIdWrapper color={data.backgroundColor} image={data.backgroundImageURL}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Nav
          name={data ? data.name : ''}
          peopleNum={data ? data.messageCount : 0}
          profileUrl={profileUrl}
        />
        <CardItems data={data} />
      </PostIdWrapper>
  );
}

export default PostPage;

