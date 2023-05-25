export function Basic() {
  return (
    <div>
      <Button color="primary" variant="contained">
        {" "}
        Press me{" "}
      </Button>
      <TextField id="name" label="Name" variant="outlined" />
      <AppBar position="static">
        <Toolbar>
          <Typography>React Navbar Example</Typography>
        </Toolbar>
      </AppBar>
      <AccountCircle />
    </div>
  );
}
