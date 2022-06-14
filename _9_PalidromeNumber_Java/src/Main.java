public class Main {
    public static void main(String[] args) {

        class Solution {
            public boolean isPalindrome(int x) {

                String input = Integer.toString(x);
                int inputLength = input.length();
                for (int i=0; i < inputLength / 2; i++){
                    if (input.charAt(i) != input.charAt(inputLength - 1 - i)){
                        return false;
                    }
                }
                return true;
            }
        }

    }



}