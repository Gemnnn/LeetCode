using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13_RomanToInteger
{
    internal class Program
    {
        static void Main(string[] args)
        {

        }
        public class Solution
        {
            public int RomanToInt(string s)
            {
                int result = 0;
                char[] Roman = s.ToArray();
                for (int i = 0; i < Roman.Length; i++)
                {
                    if (Roman[i] == 'I')
                    {
                        result += 1;
                    }
                    else if (Roman[i] == 'V')
                    {
                        result += 5;
                    }
                    else if (Roman[i] == 'X')
                    {
                        result += 10;
                    }
                    else if (Roman[i] == 'L')
                    {
                        result += 50;
                    }
                    else if (Roman[i] == 'C')
                    {
                        result += 100;
                    }
                    else if (Roman[i] == 'D')
                    {
                        result += 500;
                    }
                    else
                    {
                        result += 1000;
                    }
                }
                if (s.Contains("CD") || s.Contains("CM"))
                {
                    result -= 200;
                }
                if (s.Contains("XL") || s.Contains("XC"))
                {
                    result -= 20;
                }
                if (s.Contains("IV") || s.Contains("IX"))
                {
                    result -= 2;
                }
                return result;
            }
        }

    }
}
