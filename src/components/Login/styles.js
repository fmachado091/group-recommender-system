export default (theme) => ({
  root: {
    textAlign: 'center',
  },
  logo: {
    height: '64px',
  },
  button: {
    color: 'white',
  },
  header: {
    color: theme.palette.secondary[500],
    padding: `${theme.spacing.unit * 2}px`,
  },
  lowerText: {
    color: theme.palette.secondary[300],
    fontSize: '1.3em',
  }
});
