using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _9_PalindromeNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var solution = new Solution();

            // Example 1
            int x = 121;
            Console.WriteLine(solution.IsPalindrome(x));

            // Example 2
            //int x = -121;
            Console.WriteLine(solution.IsPalindrome(x));

            // Example 3
            //int x = 10;


        }

        public class Solution
        {
            public bool IsPalindrome(int x)
            {
                int firstDigit = 0;
                while(x.ToString().Length < 1)
                {
                    x /= 10;
                    firstDigit = x;
                }

                int lastDigit = x % 10;

                if (firstDigit == lastDigit)
                {
                    return true;
                }
                else
                {
                    return false;   
                }
            }
        }
    }
}
