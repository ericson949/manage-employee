import { router } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import { useSession } from '../src/session/ctx';
import { Formik } from 'formik';
import { loginValidationSchema } from '../src/login/validator/loginValidationSchema';
import { LoginStyles } from '../src/login/styles/loginStyles';
import { IconSymbol } from '../app-example/components/ui/IconSymbol';


export default function SignIn() {
  const { signIn } = useSession();
  const submit=()=>{
    signIn()
    router.replace('/');
  } 
  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.title}>Login</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={submit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={LoginStyles.inputContainer}>
              <IconSymbol color="" name="mail" size={25} style={LoginStyles.icon} />
              <TextInput
                style={LoginStyles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {errors.email && touched.email && (
              <Text style={LoginStyles.errorText}>{errors.email}</Text>
            )}
            <View style={LoginStyles.inputContainer}>
              <IconSymbol name="lock" color="" size={25} style={LoginStyles.icon} />
              <TextInput
                style={LoginStyles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            {errors.password && touched.password && (
              <Text style={LoginStyles.errorText}>{errors.password}</Text>
            )}
          </>
        )}
      </Formik>
    </View>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text
    //     onPress={() => {
    //       signIn();
    //       // Navigate after signing in. You may want to tweak this to ensure sign-in is
    //       // successful before navigating.
    //       router.replace('/');
    //     }}>
    //     Sign In
    //   </Text>
    // </View>
  );
}
